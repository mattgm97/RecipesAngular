import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false; // open is the bootstrap class to open dropdown
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}
