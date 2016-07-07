#include "addon.h"

using std::string;

using Nan::New;
using Nan::Set;

using v8::String;

NAN_METHOD(PlatformChoose::RegularChoose) {
  string chooseString = PlatformChoose::Choose() ?
    "" :
    "no choose for you";

  info.GetReturnValue().Set(New<String>(chooseString).ToLocalChecked());
}
