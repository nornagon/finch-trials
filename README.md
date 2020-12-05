# finch-trials
Fetch and parse Chrome's Finch trial configuration.

## Usage

```
$ node .
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

Interpreting this data is up to you :)
