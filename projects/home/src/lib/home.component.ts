import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild
} from '@angular/core';
import { AuthenticationService, Items } from '@my-app/core';
import {
  MatSelectionList,
  MatSelectionListChange
} from '@angular/material/list';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetInsertMetaDataComponent } from '@my-app/shared-ui';
import { of } from 'rxjs';

@Component({
  selector: 'lib-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  events: string[] = [];
  opened = true;
  @ViewChild(MatSelectionList, { static: true }) virtualData: MatSelectionList;
  config = {
    autoPropagation: true
  };
  public items = Items;
  itemsDetailOnClick;
  selectedLongListHeroes: any;
  dataArray: any[] = Items;
  constructor(
    private authentication: AuthenticationService,
    private bottomSheet: MatBottomSheet
  ) {}

  ngOnInit() {
    this.virtualData.selectionChange.subscribe((s: MatSelectionListChange) => {
      this.itemsDetailOnClick = of(this.items.filter(
        x => x.applicationId === s.option['_value']
      ));
      this.virtualData.deselectAll();
      s.option.selected = true;
    });
  }
  trackByFn(index, item) {
    return item.applicationId; // or item.id
  }

  onKey(value) {
    this.dataArray = [];
    this.selectSearch(value);
  }

  selectSearch(value: string) {
    if (value) {
      const filter = value.toLowerCase();
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.items.length; i++) {
        const option = this.items[i];
        if (
          option.applicationId
            .toString()
            .toLowerCase()
            .indexOf(filter) >= 0
        ) {
          this.dataArray.push(option);
        }
      }
    } else if (value === '') {
      this.dataArray = this.items;
    }
  }

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetInsertMetaDataComponent);
  }

  logout() {
    this.authentication.logout();
  }
}
