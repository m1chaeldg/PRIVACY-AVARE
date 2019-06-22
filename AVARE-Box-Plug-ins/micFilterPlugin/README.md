micFilterPlugin
--------------------------

The micFilterPlugin controls the access to the microphone with the MediaRecorder class (https://developer.android.com/reference/android/media/MediaRecorder). It hooks the following methods:

- start()
- stop()
- setOutputFile(String path)

Notice: This plug-in is just a protoype. For productive use, the providing of FakeData should be implemented. Other possibilities to access the microphone aren't controlled in the current version (e.g AudioRecord).
