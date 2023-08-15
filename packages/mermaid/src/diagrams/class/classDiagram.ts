import { DiagramDefinition } from '../../diagram-api/types.js';
// @ts-ignore: JISON doesn't support types
import parser from './parser/classDiagram.jison';
import classDb from './classDb.js';
import styles from './styles.js';
import renderer from './classRenderer.js';

export const diagram: DiagramDefinition = {
  parser,
  db: classDb,
  renderer,
  styles,
  init: (cnf) => {
    if (!cnf.class) {
      cnf.class = {};
    }
    cnf.class.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    classDb.clear();
  },
};
