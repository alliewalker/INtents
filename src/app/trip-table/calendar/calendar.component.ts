import { Component, Output, EventEmitter } from '@angular/core';
import { NgbDate, NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  @Output() onDateChange: EventEmitter<string[]> = new EventEmitter()

  public hoveredDate: NgbDate;
  public fromDate: NgbDate;
  public toDate: NgbDate;

  constructor(calendar: NgbCalendar, private api: ApiService) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), null);
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
      this.onDateChange.emit([this.formatDate(this.fromDate), null])
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
      this.onDateChange.emit([this.formatDate(this.fromDate), this.formatDate(this.toDate)]);
    } else {
      this.toDate = null;
      this.fromDate = date;
      this.onDateChange.emit([this.formatDate(this.fromDate), null])
    } 
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }

  formatDate(date:NgbDate): string {
    return new Date(date.year, date.month -1, date.day).toISOString()
      .substr(0, 10)
  }
}
