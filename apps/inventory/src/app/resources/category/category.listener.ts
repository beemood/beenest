import { EventListener, OnEvent } from '@beenest/nest';

@EventListener()
export class CategoryListener {
  @OnEvent()
  onSaveOne(payload: any) {
    console.log({ listener: true, saveOne: payload });
  }

  @OnEvent()
  onDeleteOne(payload: any) {
    console.log({ listener: true, deleteOne: payload });
  }

  @OnEvent()
  onUpdateOne(payload: any) {
    console.log({ listener: true, updateOne: payload });
  }

  @OnEvent()
  onFindMany(payload: any) {
    console.log({ listener: true, findMany: payload });
  }

  @OnEvent()
  onFindOne(payload: any) {
    console.log({ listener: true, findOne: payload });
  }
}
