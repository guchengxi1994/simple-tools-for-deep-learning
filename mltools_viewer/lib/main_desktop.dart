// ignore: depend_on_referenced_packages
import 'package:collection/collection.dart';

import 'package:desktop_multi_window/desktop_multi_window.dart';
import 'package:flutter/material.dart';
import 'package:mltools_viewer/routers.dart';
import 'package:mltools_viewer/screens/viewer_helper.dart';
import 'package:provider/provider.dart';

void main(List<String> args) {
  if (args.firstOrNull == 'multi_window') {
    final windowId = int.parse(args[1]);
    debugPrint("[windowId]:$windowId");
    runApp(MultiProvider(
        providers: [
          ChangeNotifierProvider(
              create: (_) => ViewerHelperController()..init()),
        ],
        child: MaterialApp(
          debugShowCheckedModeBanner: false,
          home: MltoolsViewerHelper(
            windowController: WindowController.fromWindowId(windowId),
          ),
        )));
  } else {
    runApp(const MyApp());
  }
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      navigatorKey: Routers.navigatorKey,
      routes: Routers.routers,
      initialRoute: Routers.pageMain,
    );
  }
}
