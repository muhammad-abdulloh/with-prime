import { Component, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { DockModule } from 'primeng/dock';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { AvatarModule } from 'primeng/avatar'; 
import { AvatarGroupModule } from 'primeng/avatargroup'; 
import { ToolbarModule } from 'primeng/toolbar';
import { MenuItem } from 'primeng/api';
import { RadioButtonModule } from 'primeng/radiobutton';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    DockModule,
    RadioButtonModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    ToolbarModule,
    AvatarModule,
    AvatarGroupModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'with-prime';
  items: MenuItem[] | undefined;
  

    position: string = 'top';

    positionOptions = [
        {
            label: 'Bottom',
            value: 'bottom'
        },
        {
            label: 'Top',
            value: 'top'
        },
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ];

    ngOnInit() {
        this.items = [
            {
                label: 'Finder',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/finder.svg'
            },
            {
                label: 'App Store',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/appstore.svg'
            },
            {
                label: 'Photos',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg'
            },
            {
                label: 'Trash',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png'
            }
        ];
    }
}
