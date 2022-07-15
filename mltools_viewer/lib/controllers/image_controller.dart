import 'package:flutter/material.dart';
import 'package:mltools_viewer/model/image_model.dart';
import 'package:provider/provider.dart';

class ImageView extends StatefulWidget {
  const ImageView({Key? key}) : super(key: key);

  @override
  State<ImageView> createState() => ImageViewState();
}

class ImageViewState extends State<ImageView> {
  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child: context.watch<ImageController>().image != null
          ? Image.memory(
              context.watch<ImageController>().image!.imageData!,
              scale: context.watch<ImageController>().scale,
              fit: BoxFit.cover,
            )
          : null,
    );
  }
}

class ImageController extends ChangeNotifier {
  MltoolImage? image;
  double scale = 1.0;
  GlobalKey<ImageViewState> globalKey = GlobalKey();

  changeImage(MltoolImage? image) {
    scale = 1.0;
    this.image = image;
    notifyListeners();
  }

  zoomIn() {
    scale = scale / 1.2;
    notifyListeners();
  }

  zoomOut() {
    scale = scale * 1.2;
    notifyListeners();
  }

  reset() {
    scale = 1.0;
    notifyListeners();
  }
}
