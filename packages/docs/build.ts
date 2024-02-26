import * as jsonDocs from '@ukho/admiralty-core/docs/docs.json';
import { generateDocs } from './plugins/websiteDocsGenerator';
import { JsonDocs } from '@ukho/admiralty-core/docs/docs';

generateDocs(jsonDocs as JsonDocs);
