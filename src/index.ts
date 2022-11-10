import { Todoist as TodoistV8 } from './v8'
import { Todoist as TodoistV9 } from './v9'

import * as TodoistV8Types from './v8/types'
import * as TodoistV9Types from './v9/types'

// export V9 as the current version
export const Todoist = TodoistV9

// create backwards compatibility list
export const v8 = TodoistV8
export const v9 = TodoistV9

// export Types as well
export { TodoistV8Types, TodoistV9Types }
