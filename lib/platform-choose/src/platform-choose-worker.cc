#include "addon.h"
#include <time.h>

using Nan::AsyncWorker;
using Nan::Callback;
using Nan::HandleScope;
using Nan::Null;

using v8::Function;
using v8::Local;
using v8::Value;

PlatformChooseWorker::PlatformChooseWorker(Callback *callback): AsyncWorker(callback) {};
PlatformChooseWorker::~PlatformChooseWorker() {};

void PlatformChooseWorker::Execute() {
  clock_t sleep = 8000000 + clock();
  while (sleep > clock());

  if (!PlatformChoose::Choose()) { SetErrorMessage("no choose for you"); };
};

void PlatformChooseWorker::HandleOKCallback() {
  HandleScope scope;
  Local<Value> argv[] = {
    Null()
  };

  callback->Call(1, argv);
};

NAN_METHOD(PlatformChooseWorker::EightInchChoose) {
  Callback *callback = new Callback(info[0].As<Function>());
  PlatformChooseWorker *worker = new PlatformChooseWorker(callback);
  AsyncQueueWorker(worker);
};

