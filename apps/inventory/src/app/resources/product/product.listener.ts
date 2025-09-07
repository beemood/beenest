import {
  EventListener,
  OnEvent,
  type ResourceEventPayload,
} from '@beenest/nest';

@EventListener()
export class ProductListener {
  @OnEvent()
  onSaveOne(payload: ResourceEventPayload) {
    console.log({ payload });
  }

  @OnEvent()
  onDeleteOne(payload: ResourceEventPayload) {
    console.log({ payload });
  }

  @OnEvent()
  onUpdateOne(payload: ResourceEventPayload) {
    console.log({ payload });
  }

  @OnEvent()
  onFindMany(payload: ResourceEventPayload) {
    console.log({ payload });
  }

  @OnEvent()
  onFindOne(payload: ResourceEventPayload) {
    console.log({ payload });
  }
}
