import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { bagHandleOutline } from 'ionicons/icons';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sinka',
  templateUrl: './sinka.page.html',
  styleUrls: ['./sinka.page.scss'],
})
export class SinkaPage implements OnInit {

  constructor(private navCtrl : NavController) { addIcons({ bagHandleOutline }); }

  ngOnInit() {
  }

  goToPraped(){
    this.navCtrl.navigateForward('/praped1')
  }

  sinka = [
    {
      id: 1,
      name: 'โค้ก',
      price: 15,
      detail: 'Coke',
      imageURL: 'https://cdn.discordapp.com/attachments/1118669200836272149/1284163766740713548/Remove-bg.ai_1726238863449_1.png?ex=66e5a234&is=66e450b4&hm=48d92db506f21db13f8488c63589f0149c5b848c631e190ad39e6f377fb4bb0f&'
    },
    {
      id: 3,
      name: 'น้ำเปล่า',
      price: 7,
      detail: 'Water',
      imageURL: 'https://cdn.discordapp.com/attachments/1118669200836272149/1284164708210966528/Remove-bg.ai_1726239040236_1.png?ex=66e5a315&is=66e45195&hm=4de8d021179f17b8f7ce347c7613beee4b0661d7380d0885c06c369789b6bbb5&'
    },
    {
      id: 5,
      name: 'สปอนเซอร์',
      price: 15,
      detail: 'Sponser',
      imageURL: 'https://cdn.discordapp.com/attachments/1118669200836272149/1284172254544003192/image.png?ex=66e5aa1c&is=66e4589c&hm=fb78c19130fa4111eeba7a28d11ef0bb0122b939e534b939f0de7d03005b5923&'
    },
  ]
  sinka2 = [
    {
      id: 2,
      name: 'แป๊ปซี่',
      price: 13,
      detail: 'Pepsi',
      imageURL: 'https://media.discordapp.net/attachments/1118669200836272149/1284183824346906754/Remove-bg.ai_1726243659278.png?ex=66e5b4e2&is=66e46362&hm=a4f7f16912f5dfd4b965bce8f0a03f173283a3d032dd81a2c623777b6460e3d5&=&format=webp&quality=lossless&width=437&height=437'
    }, {
      id: 4,
      name: 'โออิชิ',
      price: 20,
      detail: 'Pepsi',
      imageURL: 'https://cdn.discordapp.com/attachments/1118669200836272149/1284184192325914655/image.png?ex=66e5b53a&is=66e463ba&hm=ff6c01a8ff47dc6057532ee7e4e9f055e8eb393d193e745d1d59ac8211aa0de7&'
    },{
      id: 6,
      name: 'ลิปตัน',
      price: 15,
      detail: 'Liptin',
      imageURL: 'https://cdn.discordapp.com/attachments/1204244911809896478/1284158769080827999/Remove-bg.ai_1726237700252.png?ex=66e59d8d&is=66e44c0d&hm=6be9cd51dc8d38d74adf6b1128e636b357fe363a80833e1c283e00bac1555f64&'
    },
  ]
}
