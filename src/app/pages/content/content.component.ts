import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = "https://uploads.jovemnerd.com.br/wp-content/uploads/2022/07/tony_stark_vingadores_ultimato_cena__70kqp20-1210x544.jpg"
  contentTitle: string = "NOTICIA EXEMPLO"
  contentDescription: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
  private id: string | null = "0"


  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null){
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
  }

}
