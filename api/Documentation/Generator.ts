import {get} from "lodash";
import { writeFile } from "fs";
import { dereference } from "json-schema-ref-parser";
import {getFromContainer, MetadataStorage} from "class-validator";
import { validationMetadatasToSchemas} from "class-validator-jsonschema";

import Routes from "UserManagement/Routes";

const replacer = (_: string, v: any) => { if (v === undefined) { return null; } return v; };

const replaceInSchema = (schema: any) => {
  Object.keys(schema.definitions).forEach((className: string) => {
    if (schema.definitions[className].properties.listings) {
      if (schema.definitions[className].properties.listings) {
        const x = className.replace("Update", "").replace("Command", "");
        schema.definitions[className].properties.listings.items.$ref = "#/definitions/" + x + "ListingPartial";
      }
    }
    if (schema.definitions[className].properties.timings) {
      if (schema.definitions[className].properties.timings) {
        schema.definitions[className].properties.timings.$ref = "#/definitions/Timing";
      }
    }
  });
  return schema;
};

const routeLoader = new Routes();
routeLoader.initializeContainer();
routeLoader.initializeDependencies();

const metadata = get(getFromContainer(MetadataStorage), "validationMetadatas");
const schemas = validationMetadatasToSchemas(metadata);
const sPre = { definitions : schemas };
const s = replaceInSchema(sPre);

dereference(s).then((dereferencedSchemas) => {
  let fileContent = "";
  [...routeLoader.getRoutes()].sort((a, b, ) => {
    if (a.path < b.path) {
      return -1;
    }
    if (a.path > b.path) {
      return 1;
    }
    return 0;
  }).forEach((r) => {
    if (r.documentation) {
      fileContent += `## [${r.method.toUpperCase()}] ${r.path}\n`;
      const { payload, resource, resources } = r.documentation;
      if (payload) {
        const PayloadName = payload.substring(payload.lastIndexOf("/") + 1);
        fileContent += `#### Payload \n`;
        fileContent += `\`\`\`javascript\n${JSON.stringify(dereferencedSchemas.definitions[payload].properties, replacer, 2)}\n\nRequired: ${JSON.stringify(dereferencedSchemas.definitions[payload].required ? dereferencedSchemas.definitions[PayloadName].required : [])}\n\`\`\`\n`;
      }
      if (resource) {
        fileContent += `#### Response \n`;
        fileContent += `\`\`\`javascript\n${JSON.stringify({resource: dereferencedSchemas.definitions[resource].properties}, replacer, 2)} \n\`\`\`\n`;
      }
      if (resources) {
        fileContent += `#### Response \n`;
        fileContent += `\`\`\`javascript\n${JSON.stringify({resources: [dereferencedSchemas.definitions[resources].properties]}, replacer, 2)} \n\`\`\`\n`;
      }
    }
    writeFile("./README.md", fileContent, () => {});
  });
});
