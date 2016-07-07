{
  'targets': [{
    'target_name': 'platform_choose',
    'sources': [
      'src/addon.cc',
      'src/platform-choose.cc',
      'src/platform-choose-worker.cc'
    ],
    'include_dirs': [
      "<!(node -e \"require('nan')\")"
    ]
  }]
}

