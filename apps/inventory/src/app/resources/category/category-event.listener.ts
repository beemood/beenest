import { EventListener, OnEvent } from '@beenest/nest';

@EventListener()
export class CategoryEventListener {
  @OnEvent()
  onSaveOne(payload: any) {
    console.log('category.save: ', payload);
  }
}
