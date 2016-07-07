#include "addon.h"
#include <time.h>

using Nan::GetFunction;
using Nan::New;
using Nan::Set;

using v8::FunctionTemplate;

NAN_MODULE_INIT(PlatformChoose::Init) {
  srand (time(NULL));

  Set(
    target,
    New("regularChoose").ToLocalChecked(),
    GetFunction(New<FunctionTemplate>(PlatformChoose::RegularChoose)).ToLocalChecked()
  );

  Set(
    target,
    New("eightInchChoose").ToLocalChecked(),
    GetFunction(New<FunctionTemplate>(PlatformChooseWorker::EightInchChoose)).ToLocalChecked()
  );
}

NODE_MODULE(platform_choose, PlatformChoose::Init);

bool PlatformChoose::Choose() {
  int n = rand() % 10;
  return n > 0;
}
