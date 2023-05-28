import {
  Component
} from '@angular/core';
import {
  OnInit
} from '@angular/core';
import {
  MemeServiceService
} from './meme-service.service';
import {
  memeModel
} from './memeModel.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Me-Me';
  memes: memeModel[] = [];
  memeUrl: string = "";
  randomMeme: any;
  textBox1:string = "";
  textBox2:string = "";
  

  constructor(private memeService: MemeServiceService, private modalService: NgbModal) {}

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  ngOnInit(): void {
    this.memeService.getMemeData().subscribe((result) => {
      this.memes = result;
    });
  }

  pressMemeButton() {
    if (this.memes.length < 1) {
      return;
    }

    if (this.textBox1 == '' || this.textBox2 == '') {
      return;
    }

    this.randomMeme = this.randomNewMeme();

    this.memeService.postMemeText(this.randomMeme.id, this.textBox1, this.textBox2).subscribe((result) => {
      this.memeUrl = result;
    });
  }
  
  randomNewMeme() {
    let randomIndex = Math.floor(Math.random() * this.memes.length);
    return this.memes[randomIndex];
  }
}
