import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'mon-blog';
  posts =[
  {
  title : 'Mon premier post',
  content : 'Le code complet et fonctionnel doit être déposé dans un dépôt Git en ligne que les validateurs doivent pouvoir cloner',
  loveIts : 1,
  created_at: '04/03/2019, 04:00 PM'
  },
  {
    title : 'Mon deuxième post',
    content : 'Le code complet et fonctionnel doit être déposé dans un dépôt Git en ligne que les validateurs doivent pouvoir cloner',
    loveIts : -1,
    created_at: '04/03/2019, 04:00 PM'
  },
  {
    title : 'Encore un post',
    content : 'Le code complet et fonctionnel doit être déposé dans un dépôt Git en ligne que les validateurs doivent pouvoir cloner',
    loveIts : 0,
    created_at: '04/03/2019, 04:00 PM'
  }
];
}
