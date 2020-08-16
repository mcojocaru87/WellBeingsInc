import { Component, AfterViewInit, ViewChild, ElementRef, OnInit, Inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit, AfterViewInit {
  map: google.maps.Map;
  contactForm: FormGroup;
  formSubmitted: boolean = false;
  data: any = [];
  key: string = 'formSubmitted';
  showContactForm: boolean = true;
  showAlertMsg: boolean;
  formSubmittedSuccesfully: boolean;
  formSubmittedAlready: boolean;
  alertMsg: string = '';

  @ViewChild('mapWrapper') mapElement: ElementRef;

  constructor(private formBuilder: FormBuilder, @Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
    if (this.formSubmittedAlreadyInCurrentSession()) {
      this.showContactForm = false;
      this.alertMsg = 'You have submitted this form already.'
      this.formSubmittedAlready = true;
      this.showAlertMsg = true;
    }

    this.contactForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.minLength(10)]],
        message: ['', [Validators.required, Validators.minLength(25)]]
      }
    );
  }

  ngAfterViewInit() {
    this.initMap();
  }

  initMap() {
    const coordinates = new google.maps.LatLng(43.311724, -79.847227);
    const mapOptions: google.maps.MapOptions = {
      center: coordinates,
      zoom: 16,
      fullscreenControl: false,
      mapTypeControl: false,
      streetViewControl: true
    };
    const marker = new google.maps.Marker({
      position: coordinates,
      title: 'Well Beings, Inc.'
    });
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    marker.setMap(this.map);
  }

  onSubmit() {
    this.formSubmitted = true;

    if (this.formSubmittedAlreadyInCurrentSession()) {
      this.alertMsg = 'Only one submit per session. Your form has not been submitted.';
      this.formSubmittedAlready = true;
      this.showAlertMsg = true;
      return;
    }

    if (this.contactForm.invalid) {
      this.showAlertMsg = false;
      return;
    }

    this.resetForm();

    this.formSubmittedSuccesfully = true;
    this.alertMsg = 'Thank you! Form has been successfully submitted.';
    this.showAlertMsg = true;
    this.saveInLocal(this.key, true);
  }

  saveInLocal(key, val): void {
    this.storage.set(key, val);
    this.data[key] = this.storage.get(key);
  }

  getFromLocal(key): void {
    this.data[key] = this.storage.get(key);
  }

  formSubmittedAlreadyInCurrentSession(): boolean {
    this.getFromLocal(this.key);
    return this.data && this.data[this.key];
  }

  resetForm() {
    this.formSubmitted = false;
    this.contactForm.reset();
  }
}
