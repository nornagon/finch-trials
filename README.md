# finch-trials
Fetch and parse Chrome's Finch trial configuration.

See [nornagon/finch-trials-history](/nornagon/finch-trials-history) for historical Finch trial data.

## Usage

```
$ npx finch-trials
{
  "serialNumber": "d6226671fecbb11184e8f289a51f7a420516ce69",
  "study": [
    {
      "name": "AImageReaderMediaPlayer",
      "consistency": "PERMANENT",
      "experiment": [
        {
          "name": "Use_AImageReaderMediaPlayer_stable_100",
          "probabilityWeight": 100,
          "featureAssociation": {
            "enableFeature": [
              "AImageReaderMediaPlayer"
            ]
          }
        },
        {
          "name": "Control_stable_100",
          "probabilityWeight": 0,
          "featureAssociation": {
            "disableFeature": [
              "AImageReaderMediaPlayer"
            ]
          }
        }
      ],
      "filter": {
        "minVersion": "76.0.3809.111",
        "maxVersion": "77.*",
        "channel": [
          "STABLE"
        ],
        "platform": [
          "PLATFORM_ANDROID"
        ]
      }
    },
    /* ... */
  ],
  "version": "20201204-211533.631657"
}
```

Interpreting this data is up to you :) The [Chromium source](https://source.chromium.org/chromium/chromium/src/+/master:components/variations/proto/variations_seed.proto) is probably a good place to start.
