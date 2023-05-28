import {
  Injectable
} from '@angular/core';
import {
  memeModel
} from './memeModel.model';
import {
  HttpClient
} from '@angular/common/http';
import {
  map
} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MemeServiceService {
  memes: memeModel[] = [];
  constructor(private http: HttpClient) {}

  getMemeData() {
    return this.http.get < memeModel[] > ("https://api.imgflip.com/get_memes")
      .pipe(
        map((result: any) => {
          return result.data;
        }),
        map((data: any) => {
          return data.memes;
        })
      );

  }

  postMemeText(id: string, text1: string, text2: string) {
    return this.http.get<string>(`https://api.imgflip.com/caption_image?template_id=${id}&username=tinyones&password=littleones123&text0=${text1}&text1=${text2}`)
      .pipe(
        map((result: any) => {
          return result.data;
        }),
        map((data: any) => {
          return data.url;
        })
      );
  }
}
