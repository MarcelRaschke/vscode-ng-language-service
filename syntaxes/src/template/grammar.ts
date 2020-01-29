/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {GrammarDefinition} from '../types';

export const template: GrammarDefinition = {
  scopeName: 'template.ng',
  injectionSelector: 'L:text.html -comment',
  patterns: [
    {include: '#interpolation'},
    {include: '#propertyBinding'},
    {include: '#eventBinding'},
    {include: '#twoWayBinding'},
    {include: '#templateBinding'},
  ],
  repository: {

    interpolation: {
      begin: /{{/,
      beginCaptures: {
        0: {name: 'punctuation.definition.block.ts'},
      },
      end: /}}/,
      endCaptures: {
        0: {name: 'punctuation.definition.block.ts'},
      },
      contentName: 'source.js',
      patterns: [
        {include: 'source.js'},
      ],
    },

    propertyBinding: {
      begin: /(\[\s*@?[-_a-zA-Z0-9.$]*\s*])(=)(["'])/,
      beginCaptures: {
        1: {
          name: 'entity.other.attribute-name.html entity.other.ng-binding-name.property.html',
          patterns: [
            {include: '#bindingKey'},
          ],
        },
        2: {name: 'punctuation.separator.key-value.html'},
        3: {name: 'string.quoted.html punctuation.definition.string.begin.html'},
      },
      end: /\3/,
      endCaptures: {
        0: {name: 'string.quoted.html punctuation.definition.string.end.html'},
      },
      name: 'meta.ng-binding.property.html',
      contentName: 'source.js',
      patterns: [
        {include: 'source.js'},
      ],
    },

    eventBinding: {
      begin: /(\(\s*@?[-_a-zA-Z0-9.$]*\s*\))(=)(["'])/,
      beginCaptures: {
        1: {
          name: 'entity.other.attribute-name.html entity.other.ng-binding-name.event.html',
          patterns: [
            {include: '#bindingKey'},
          ],
        },
        2: {name: 'punctuation.separator.key-value.html'},
        3: {name: 'string.quoted.html punctuation.definition.string.begin.html'},
      },
      end: /\3/,
      endCaptures: {
        0: {name: 'string.quoted.html punctuation.definition.string.end.html'},
      },
      name: 'meta.ng-binding.event.html',
      contentName: 'source.js',
      patterns: [
        {include: 'source.js'},
      ],
    },

    twoWayBinding: {
      begin: /(\[\s*\(\s*@?[-_a-zA-Z0-9.$]*\s*\)\s*\])(=)(["'])/,
      beginCaptures: {
        1: {
          name: 'entity.other.attribute-name.html entity.other.ng-binding-name.two-way.html',
          patterns: [
            {include: '#bindingKey'},
          ],
        },
        2: {name: 'punctuation.separator.key-value.html'},
        3: {name: 'string.quoted.html punctuation.definition.string.begin.html'},
      },
      end: /\3/,
      endCaptures: {
        0: {name: 'string.quoted.html punctuation.definition.string.end.html'},
      },
      name: 'meta.ng-binding.two-way.html',
      contentName: 'source.js',
      patterns: [
        {include: 'source.js'},
      ],
    },

    templateBinding: {
      begin: /(\*[-_a-zA-Z0-9.$]*)(=)(["'])/,
      beginCaptures: {
        1: {
          name: 'entity.other.attribute-name.html entity.other.ng-binding-name.template.html',
          patterns: [
            {include: '#bindingKey'},
          ],
        },
        2: {name: 'punctuation.separator.key-value.html'},
        3: {name: 'string.quoted.html punctuation.definition.string.begin.html'},
      },
      end: /\3/,
      endCaptures: {
        0: {name: 'string.quoted.html punctuation.definition.string.end.html'},
      },
      name: 'meta.ng-binding.template.html',
      contentName: 'source.js',
      patterns: [
        {include: 'source.js'},
      ],
    },

    bindingKey: {
      patterns: [
        {
          match: /([\[\(]{1,2})(?:\s*)(@?[-_a-zA-Z0-9.$]*)(?:\s*)([\]\)]{1,2})/,
          captures: {
            1: {name: 'punctuation.definition.ng-binding-name.begin.html'},
            2: {
              patterns: [
                {
                  match: /\./,
                  name: 'punctuation.accessor.html',
                },
              ],
            },
            3: {name: 'punctuation.definition.ng-binding-name.end.html'},
          },
        },
      ],
    },
  },
};