import Utility from '../../../js/src/utility_c'
import { todoPageType } from '../../../../models/auvenir/todo/resources'

var TodoListModel = {
  bulkActionValidationModel: function () {},
  model: function () {
    return {
      columns: {
        name: {
          headerText: window.localize.lang.todoListComponent.todoName,
          width: 3,
          viewParse: (a) => a,
          comparator: (a, b) => (a === b),
          sortFunc: (a, b) => {
            a = this.state.todoList[a].name.toLowerCase()
            b = this.state.todoList[b].name.toLowerCase()
            if (a === b) return 0
            return (a < b) ? -1 : 1
          },
          searchQuery: (name, filter) => {
            return name.toLowerCase().includes(filter.toLowerCase())
          }
        },
        category: {
          headerText: window.localize.lang.category,
          viewParse: (a) => { (a ? a.name : window.localize.lang.none) },
          comparator: (a, b) => (a === b),
          sortFunc: (a, b) => {
            a = this.state.todoList[a].category
            b = this.state.todoList[b].category
            a = (a ? a.name : window.localize.lang.none).toLowerCase()
            b = (b ? b.name : window.localize.lang.none).toLowerCase()
            if (a === b) return 0
            return (a < b) ? -1 : 1
          },
          searchQuery: (category, filter) => {
            var a = category ? category.name : window.localize.lang.none
            return a.toLowerCase().includes(filter.toLowerCase())
          }
        },
        flowStatus: {
          headerText: window.localize.lang.status,
          cellClass: 'todoList-statusCell',
          comparator: (a, b) => (a === b),
          permission: this.hasEngagementPermission('PM_SEE_TODO_STATUS'),
          sortFunc: (a, b) => {
            a = window.localize.lang.todoStatus[this.state.todoList[a].flowStatus].toLowerCase()
            b = window.localize.lang.todoStatus[this.state.todoList[b].flowStatus].toLowerCase()
            if (a === b) return 0
            return (a < b) ? -1 : 1
          },
          searchQuery: (flowStatus, filter) => {
            return window.localize.lang.todoStatus[flowStatus].toLowerCase().includes(filter.toLowerCase())
          }
        },
        dueDate: {
          headerText: window.localize.lang.dueDate,
          viewParse: (a) => window.localize.toDateString(new Date(a)),
          comparator: (a, b) => (a === b),
          sortFunc: (a, b) => {
            a = Date.parse(this.state.todoList[a].dueDate)
            b = Date.parse(this.state.todoList[b].dueDate)
            if (a === b) return 0
            return (a < b) ? -1 : 1
          },
          searchQuery: (date, filter) => {
            return window.localize.toDateString(new Date(date)).toLowerCase().includes(filter.toLowerCase())
          }
        },
        preparer: {
          headerText: this.hasEngagementPermission('PM_SEE_HEADER_PREPARER') && this.props.todoPageType === todoPageType.WP ? window.localize.lang.preparer : window.localize.lang.todoListComponent.auditorAssignee,
          viewParse: (a) => { return (a ? (a.firstName + ' ' + (Utility.checkAbbreviableLastName(a.lastName))) : window.localize.lang.none) },
          comparator: (a, b) => (a === b),
          sortFunc: (a, b) => {
            a = this.state.todoList[a].preparer
            b = this.state.todoList[b].preparer
            a = (a ? (a.firstName + ' ' + a.lastName) : window.localize.lang.none).toLowerCase()
            b = (b ? (b.firstName + ' ' + b.lastName) : window.localize.lang.none).toLowerCase()
            if (a === b) return 0
            return (a < b) ? -1 : 1
          },
          searchQuery: (preparer, filter) => {
            var a = preparer ? (preparer.firstName + ' ' + preparer.lastName) : window.localize.lang.none
            return a.toLowerCase().includes(filter.toLowerCase())
          }
        },
        reviewer: {
          headerText: window.localize.lang.reviewer,
          viewParse: (a) => { return (a ? (a.firstName + ' ' + (Utility.checkAbbreviableLastName(a.lastName))) : window.localize.lang.none) },
          comparator: (a, b) => (a === b),
          permission: this.hasEngagementPermission('PM_SEE_HEADER_REVIEWER') && this.props.todoPageType === todoPageType.WP,
          sortFunc: (a, b) => {
            a = this.state.todoList[a].reviewer
            b = this.state.todoList[b].reviewer
            a = (a ? (a.firstName + ' ' + a.lastName) : window.localize.lang.none).toLowerCase()
            b = (b ? (b.firstName + ' ' + b.lastName) : window.localize.lang.none).toLowerCase()
            if (a === b) return 0
            return (a < b) ? -1 : 1
          },
          searchQuery: (reviewer, filter) => {
            var a = reviewer ? (reviewer.firstName + ' ' + reviewer.lastName) : window.localize.lang.none
            return a.toLowerCase().includes(filter.toLowerCase())
          }
        },
        clientAssignee: {
          headerText: window.localize.lang.clientcontact,
          viewParse: (a) => { return (a ? (a.firstName + ' ' + (Utility.checkAbbreviableLastName(a.lastName))) : window.localize.lang.none) },
          comparator: (a, b) => (a === b),
          sortFunc: (a, b) => {
            a = this.state.todoList[a].clientAssignee
            b = this.state.todoList[b].clientAssignee
            a = (a ? (a.firstName + ' ' + a.lastName) : window.localize.lang.none).toLowerCase()
            b = (b ? (b.firstName + ' ' + b.lastName) : window.localize.lang.none).toLowerCase()
            if (a === b) return 0
            return (a < b) ? -1 : 1
          },
          searchQuery: (clientAssignee, filter) => {
            var a = clientAssignee ? (clientAssignee.firstName + ' ' + clientAssignee.lastName) : window.localize.lang.none
            return a.toLowerCase().includes(filter.toLowerCase())
          }
        }
      },
      columnsLeadsheet: {
        name: {
          headerText: window.localize.lang.leadsheetName,
          width: 3,
          viewParse: (a) => a,
          comparator: (a, b) => (a === b),
          sortFunc: (a, b) => {
            a = this.state.todoList[a].name.toLowerCase()
            b = this.state.todoList[b].name.toLowerCase()
            if (a === b) return 0
            return (a < b) ? -1 : 1
          },
          searchQuery: (name, filter) => {
            return name.toLowerCase().includes(filter.toLowerCase())
          }
        },
        dueDate: {
          headerText: window.localize.lang.dateModified,
          viewParse: (a) => window.localize.toDateString(new Date(a)),
          comparator: (a, b) => (a === b),
          sortFunc: (a, b) => {
            a = Date.parse(this.state.todoList[a].dateModified)
            b = Date.parse(this.state.todoList[b].dateModified)
            if (a === b) return 0
            return (a < b) ? -1 : 1
          },
          searchQuery: (date, filter) => {
            return window.localize.toDateString(new Date(date)).toLowerCase().includes(filter.toLowerCase())
          }
        },
        preparer: {
          headerText: this.hasEngagementPermission('PM_SEE_HEADER_PREPARER') ? window.localize.lang.preparer : window.localize.lang.todoListComponent.auditorAssignee,
          viewParse: (a) => { return (a ? (a.firstName + ' ' + (Utility.checkAbbreviableLastName(a.lastName))) : window.localize.lang.none) },
          comparator: (a, b) => (a === b),
          sortFunc: (a, b) => {
            a = this.state.todoList[a].preparer
            b = this.state.todoList[b].preparer
            a = (a ? (a.firstName + ' ' + a.lastName) : window.localize.lang.none).toLowerCase()
            b = (b ? (b.firstName + ' ' + b.lastName) : window.localize.lang.none).toLowerCase()
            if (a === b) return 0
            return (a < b) ? -1 : 1
          },
          searchQuery: (preparer, filter) => {
            var a = preparer ? (preparer.firstName + ' ' + preparer.lastName) : window.localize.lang.none
            return a.toLowerCase().includes(filter.toLowerCase())
          }
        },
        reviewer: {
          headerText: window.localize.lang.reviewer,
          viewParse: (a) => { return (a ? (a.firstName + ' ' + (Utility.checkAbbreviableLastName(a.lastName))) : window.localize.lang.none) },
          comparator: (a, b) => (a === b),
          permission: this.hasEngagementPermission('PM_SEE_HEADER_REVIEWER'),
          sortFunc: (a, b) => {
            a = this.state.todoList[a].reviewer
            b = this.state.todoList[b].reviewer
            a = (a ? (a.firstName + ' ' + a.lastName) : window.localize.lang.none).toLowerCase()
            b = (b ? (b.firstName + ' ' + b.lastName) : window.localize.lang.none).toLowerCase()
            if (a === b) return 0
            return (a < b) ? -1 : 1
          },
          searchQuery: (reviewer, filter) => {
            var a = reviewer ? (reviewer.firstName + ' ' + reviewer.lastName) : window.localize.lang.none
            return a.toLowerCase().includes(filter.toLowerCase())
          }
        }
      },
      validationModel: {
        preparer: [ {compare: (a) => (a.flowStatus !== 'COMPLETED'), errorMsg: this.text.bulkActionValidation.completeTodo} ],
        reviewer: [ {compare: (a) => (a.flowStatus !== 'COMPLETED'), errorMsg: this.text.bulkActionValidation.completeTodo} ],
        clientAssignee: [ {compare: (a) => (a.flowStatus !== 'COMPLETED'), errorMsg: this.text.bulkActionValidation.completeTodo} ],
        dueDate: [ {compare: (a) => (a.flowStatus !== 'COMPLETED'), errorMsg: this.text.bulkActionValidation.completeTodo} ],
        category: [ {compare: (a) => (a.flowStatus !== 'COMPLETED'), errorMsg: this.text.bulkActionValidation.completeTodo} ],
        delete: [ {compare: (a) => (a.flowStatus !== 'COMPLETED'), errorMsg: this.text.bulkActionValidation.completeTodo} ]
      }
    }
  }
}

module.exports = TodoListModel
