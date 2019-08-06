import { Component, OnInit } from '@angular/core';
import {  ViewChild,  TemplateRef } from '@angular/core';
import { startOfDay, isSameDay, isSameMonth } from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
@Component({
  selector: 'app-dragevent',
  templateUrl: './dragevent.component.html',
  styleUrls: ['./dragevent.component.scss']
})
export class DrageventComponent implements OnInit {
  ngOnInit() {
  }
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
        {
      start: startOfDay(new Date()),
      title: 'WeeKEnd Party',
      draggable: true
       },
    {
      start: startOfDay(new Date()),
      title: 'event-2222',
      draggable: true
     },
     {
      start: startOfDay(new Date()),
      title: 'event-3333',
      draggable: true
     },
     {
      start: startOfDay(new Date()),
      title: 'event-4444',
      draggable: true
     },
  ];

  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal) {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'sm' });
  }
  
}
