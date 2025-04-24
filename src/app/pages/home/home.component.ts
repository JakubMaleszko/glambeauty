import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-home',
  imports: [CardComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cards = [
    {title: "O nas", imgPath: "/img/eye.jpg", imgAlt: "glambeauty logo", content: "W GlamBeauty łączymy pasję, doświadczenie i nowoczesne techniki, by wydobywać naturalne piękno. Tworzymy miejsce, gdzie każda kobieta może poczuć się wyjątkowo i pięknie."},
    {title: "Usługi", imgPath: "/img/eye.jpg", imgAlt: "glambeauty logo", content: "Oferujemy kompleksowe zabiegi z zakresu stylizacji rzęs, brwi oraz kosmetologii. Pracujemy precyzyjnie, indywidualnie dopasowując każdy zabieg do Twoich potrzeb i urody."},
    {title: "Szkolenia", imgPath: "/img/eye.jpg", imgAlt: "glambeauty logo", content: "Prowadzimy profesjonalne szkolenia z rzęs i brwi, które rozwijają umiejętności i wspierają w budowaniu kariery w branży beauty. Uczymy praktycznie, skutecznie i z pasją."},
    {title: "Opinie", imgPath: "/img/eye.jpg", imgAlt: "glambeauty logo", content: "Przeczytaj opinie zadowolonych klientek, które potwierdzają nasz profesjonalizm i jakość usług. Dowiedz się, dlaczego GlamBeauty Studio Urody to ulubione miejsce pielęgnacji."},
    {title: "Cennik", imgPath: "/img/eye.jpg", imgAlt: "glambeauty logo", content: "Zapoznaj się z aktualnym cennikiem naszych usług – transparentnie przygotowanym, byś mogła łatwo znaleźć ceny wszystkich usług, które mamy w ofercie"},
  ]
}
