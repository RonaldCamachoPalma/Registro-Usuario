import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showModal=false;
  widtImg = 10;
  name = 'Cesar Augusto Silva Ruiz';
  age = '33';
  img = 'https://source.unsplash.com/random';
  btnDisable = true;
  msjErrorName = true;
  msjErrorPass = true;
  msjErrorEmail = true;
  person = {
    name: 'Cesar object',
    age: 33,
    avatar: 'https://source.unsplash.com/random',
  };

  box = {
    width: 100,
    height: 100,
    background: 'red',
  };

  names: string[] = ['Hannah', 'Cesar', 'Johanna'];
  myDreams: string[] = [
    'Im and  will happy with my family',
    'speak english',
    'Improve how developer arquitec',
  ];
  newName = '';
  newDream = '';
  register = {
    name: '',
    email: '',
    password: '',
  };

  toggleButton() {
    this.btnDisable = !this.btnDisable;
  }

  incrementAge() {
    this.person.age++;
  }

  onScroll(event: Event) {
    const element = event?.target as HTMLAreaElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event?.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  addDream() {
    this.myDreams.push(this.newDream);
    this.newDream = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
  deleteDream(index: number) {
    this.myDreams.splice(index, 1);
  }
  onRegister() {
    console.log(this.register);
    this.showModal = true;
  }
  onCloseModal() {
    this.showModal = false;
  }
}

