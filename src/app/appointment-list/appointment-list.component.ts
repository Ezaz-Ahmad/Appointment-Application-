import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';///use for displaying the jason file where we stored the data

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  
  newAppointmentTitle : string = "" ;
  newAppointmentDate : Date = new Date ();
  appointments : Appointment[]= []

  ngOnInit(): void {//for using onInit
    let saveAppointments = localStorage.getItem("appointments")//loading data from local storage

    this.appointments = saveAppointments ? JSON.parse(saveAppointments) : []//checking data in local storage weather we have data or not
  }

addAppointment()////method for creating and showing new appointments
{
 if(this.newAppointmentTitle.trim() .length && this.newAppointmentDate)
 {
  let newAppointment : Appointment={
    id:Date.now(),
    title:this.newAppointmentTitle,
    date: this.newAppointmentDate
  }

  this.appointments.push(newAppointment)//pusshing the newappointment schedule

  this.newAppointmentTitle= "";//reseting the title field
  this.newAppointmentDate= new Date();//resetting the date field
  localStorage.setItem("appointments",JSON.stringify(this.appointments))//saving data into local storage

  alert(this.appointments.length)//showing the alert 
 }
}

deletAppointment(index: number)//deleting any specific appointment
{
  this.appointments.splice(index, 1)
  localStorage.setItem("appointments",JSON.stringify(this.appointments))//deleting and replacing the local storage data
}
}
