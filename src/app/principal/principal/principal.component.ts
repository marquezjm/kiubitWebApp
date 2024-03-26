import { Component } from '@angular/core';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {

  cdkDropListDroppedHandler(event: CdkDragDrop<any[]>) {
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex);
  }

  mouseEnterHandler(event: MouseEvent, chapterExpansionPanel: MatExpansionPanel) {
    if (event.buttons && !chapterExpansionPanel.expanded) {
      chapterExpansionPanel.open();
    }
  }

  chapters = [
    {
      id: 1,
      name: 'Chapter 1',
      items: [
        {
          id: 1,
          name: 'one'
        },
        {
          id: 2,
          name: 'two'
        },
      ]
    },
    {
      id: 2,
      name: 'Chapter 2',
      items: [
        {
          id: 3,
          name: 'three'
        },
        {
          id: 4,
          name: 'four'
        },
        {
          id: 5,
          name: 'five'
        },
        {
          id: 6,
          name: 'six'
        },
        {
          id: 7,
          name: 'seven'
        },
        {
          id: 8,
          name: 'eight'
        },
      ]
    },
    {
      id: 3,
      name: 'Chapter 3',
      items: [
        {
          id: 9,
          name: 'nine'
        }
      ]
    },
    {
      id: 4,
      name: 'Chapter 4',
      items: [
        {
          id: 10,
          name: 'ten'
        },
        {
          id: 11,
          name: 'eleven'
        }
      ]
    },
  ];
}
