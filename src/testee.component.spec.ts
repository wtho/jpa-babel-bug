import { NgModule, Injectable, Optional } from "@angular/core";
import { TestBed } from "@angular/core/testing";

@Injectable()
export class MessageService {}

export abstract class BaseHandler {}

// @Injectable() // enable to get working in ts-jest and babel
export class MyHandler {
  constructor(@Optional() private messageService: MessageService) {}
}

@NgModule({})
export class SharedModule {
  constructor(ts: BaseHandler) {}
}

describe("SharedModule", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService, { provide: BaseHandler, useClass: MyHandler }]
    });
  });

  it("should create", () => {
    expect(SharedModule).toBeDefined();
  });
});
