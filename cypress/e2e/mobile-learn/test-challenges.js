import currData from '../../../shared/config/curriculum.json';
import { orderedSuperBlockInfo } from '../../../tools/scripts/build/build-external-curricula-data';

const nonEditorSB = [
  'python-for-everybody',
  'data-analysis-with-python',
  'machine-learning-with-python'
];

const publicSB = orderedSuperBlockInfo
  .filter(sb => sb.public === true && !nonEditorSB.includes(sb.dashedName))
  .map(sb => sb.dashedName);

describe('Test challenges in mobile', () => {
  for (let superBlock of publicSB) {
    for (let currBlock of Object.values(currData[superBlock]['blocks'])) {
      describe(`SuperBlock: ${superBlock} - Block: ${currBlock['meta']['name']}`, () => {
        for (let currChallenge of currBlock['challenges']) {
          it(`Challenge: ${currChallenge['title']}(${currChallenge['id']})`, () => {
            cy.visit(
              `/${superBlock}/${currChallenge['block']}/${currChallenge['id']}`,
              {
                onBeforeLoad(win) {
                  cy.spy(win.console, 'log').as('consoleLog');
                }
              }
            );
            cy.get('@consoleLog').should('be.calledWith', 'completed');
          });
        }
      });
    }
  }
});
