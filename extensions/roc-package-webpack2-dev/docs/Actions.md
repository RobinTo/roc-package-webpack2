# Actions for `roc-package-webpack2`

## Actions
* [roc-abstract-package-base-dev](#roc-abstract-package-base-dev)
  * [after-clean](#after-clean)
  * [before-clean](#before-clean)
* [roc-package-webpack2](#roc-package-webpack2)
  * [get-webpack-configs](#get-webpack-configs)
  * [run-build-command](#run-build-command)
  * [run-dev-command](#run-dev-command)

## roc-abstract-package-base-dev

### after-clean

Runs after clean command is executed. Logs that the action has been completed successfully.

__Connects to extension:__ `roc-abstract-package-base-dev`  
__Connects to hook:__ `after-clean`  
__Have post:__ No  

### before-clean

Runs before clean command is executed. Returns an array of paths that should be removed.

__Connects to extension:__ `roc-abstract-package-base-dev`  
__Connects to hook:__ `before-clean`  
__Have post:__ No  

## roc-package-webpack2

### get-webpack-configs

Called when initiating webpack, getting webpack configs.

__Connects to extension:__ Not specified  
__Connects to hook:__ `get-webpack-configs`  
__Have post:__ No  

### run-build-command

When roc build is executed.

__Connects to extension:__ Not specified  
__Connects to hook:__ `run-build-command`  
__Have post:__ No  

### run-dev-command

When roc dev command is executed.

__Connects to extension:__ Not specified  
__Connects to hook:__ `run-dev-command`  
__Have post:__ No  
