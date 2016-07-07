#ifndef SRC_ADDON_H_
#define SRC_ADDON_H_

#include <nan.h>
#include <string>

class PlatformChoose {
public:
  static void Init(v8::Handle<v8::Object> exports);
  static NAN_METHOD(RegularChoose);
  static bool Choose();
};

class PlatformChooseWorker: Nan::AsyncWorker {
public:
  PlatformChooseWorker(Nan::Callback *callback);
  ~PlatformChooseWorker();

  void Execute();
  static NAN_METHOD(EightInchChoose);

protected:
  void HandleOKCallback();
};

#endif
