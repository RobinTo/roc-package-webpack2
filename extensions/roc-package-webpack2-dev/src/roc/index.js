import { lazyFunctionRequire } from 'roc';
import { isString, isObject } from 'roc/validators';

import config from '../config/roc.config.js';
import meta from '../config/roc.config.meta.js';

const lazyRequire = lazyFunctionRequire(require);
export default {
    config,
    meta,
    packages: [
        require.resolve('roc-abstract-package-base-dev'),
    ],
    actions: [
        {
            hook: 'get-webpack-configs',
            description: 'Called when initiating webpack, getting webpack configs.',
            action: lazyRequire('../webpack'),
        }, {
            hook: 'run-build-command',
            description: 'When roc build is executed.',
            action: lazyRequire('../actions/build'),
        }, {
            hook: 'run-dev-command',
            description: 'When roc dev command is executed.',
            action: lazyRequire('../actions/dev'),
        },
    ],
    hooks: {
        'get-webpack-configs': {
            description: 'Used to create the final webpack configuration object.',
            initialValue: {},
            returns: isObject(),
            arguments: {
                target: {
                    validator: isString,
                    description: 'Target for webpack build config.',
                },
                bableConfig: {
                    validator: isObject,
                    description: 'Babel config for webpack build',
                },
            },
        },
    },
    commands: {
        development: {
            build: {
                override: 'roc-abstract-package-base-dev',
                settings: ['build'],
                description: 'Build the current project.',
            },
            dev: {
                override: 'roc-abstract-package-base-dev',
                settings: true,
                description: 'Starts the current project in development mode.',
            },
        },
    },
};
