import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild
} from '@angular/core';
import { AuthenticationService, Items } from '@my-app/core';
import { MatSelectionList, MatSelectionListChange } from '@angular/material/list';
import { SelectionModel } from '@angular/cdk/collections';
import { ScrollDispatcher } from '@angular/cdk/scrolling';

@Component({
  selector: 'lib-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  events: string[] = [];
  opened: boolean = true;
  @ViewChild(MatSelectionList, { static: true }) shoes: MatSelectionList;
  config = {
    autoPropagation: true
  };
  public items = Items;
  itemsDetailOnClick;
  constructor(private authentication: AuthenticationService, private scrollDispatcher: ScrollDispatcher) {
  }

  ngOnInit() {
    this.shoes.selectionChange.subscribe((s: MatSelectionListChange) => {
      this.itemsDetailOnClick = this.items.filter(x => x.applicationId === s.option['_value'])[0];
      this.shoes.deselectAll();
      s.option.selected = true;
    });
  }
  trackByFn(index, item) {
    return item.applicationId; // or item.id
  }

  logout() {
    this.authentication.logout();
  }
}
