import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  profileid: string;
  character;

  constructor(   
    private activadRoute: ActivatedRoute,
    private http: HttpClient

    ) {

   }

  ngOnInit() {
      this.profileid = this.activadRoute.snapshot.paramMap.get('id')
      this.http.get('https://rickandmortyapi.com/api/character/' + this.profileid)
        .subscribe(res => this.character = res)
  }

}
