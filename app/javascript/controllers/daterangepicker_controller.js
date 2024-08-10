import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="daterangepicker"
export default class extends Controller {
  connect() {
    new DateRangePicker(this.element, {
      locale: {
        format: "YYYY-MM-DD",
      }, //왜 그러는지 모르겠는데 이거 아래 위치하면 동작하지 않음!
      alwaysShowCalendars: true,
      autoApply: true,
      ranges: {
          'Today': [moment().startOf('day'), moment().endOf('day')],
          'Yesterday': [moment().subtract(1, 'days').startOf('day'), moment().subtract(1, 'days').endOf('day')],
          'Last 7 Days': [moment().subtract(6, 'days').startOf('day'), moment().endOf('day')],
          'This Month': [moment().startOf('month').startOf('day'), moment().endOf('month').endOf('day')],
      },
    })
  }
}
