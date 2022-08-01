import 'dart:convert';

import 'package:crypto/crypto.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:mltools_viewer/app_style.dart';
import 'package:mltools_viewer/controllers/custon_ner_labeling_controller.dart';
import 'package:mltools_viewer/model/enums.dart';
import 'package:mltools_viewer/model/mltool_ner_save_model.dart';
import 'package:mltools_viewer/model/ner_highlighted_offset.dart';
import 'package:mltools_viewer/screens/nlp_labeling/text_annotation/components/deletable_card.dart';
import 'package:provider/provider.dart';

import 'components/ner_settings_dropdown_button.dart';
import 'components/text_highlight_widget.dart';

class CustomTextAnnotationScreen extends StatelessWidget {
  CustomTextAnnotationScreen({Key? key}) : super(key: key);
  final TextEditingController controller = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => CustomNerLabelingController())
      ],
      builder: (context, child) {
        return Scaffold(
          appBar: AppBar(
            title: buildTitle(context),
            elevation: 0,
            centerTitle: true,
            automaticallyImplyLeading: false,
            backgroundColor: AppStyle.lightBlue,
            leading: InkWell(
              onTap: () {
                Navigator.of(context).pop();
              },
              child: const Icon(Icons.chevron_left),
            ),
            actions: [
              NerSettingsDropdownButton(
                nerType: 1,
              )
            ],
          ),
          body: SingleChildScrollView(
            padding: const EdgeInsets.all(50),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    const Text("类名："),
                    const SizedBox(
                      width: 10,
                    ),
                    InkWell(
                      onTap: () async {
                        String? result = await showCupertinoDialog(
                            context: context,
                            builder: ((context) {
                              return CupertinoAlertDialog(
                                title: const Text("输入类名"),
                                content: Material(
                                  child: TextField(
                                    controller: controller,
                                    decoration: AppStyle.getInputDecotation(),
                                  ),
                                ),
                                actions: [
                                  CupertinoActionSheetAction(
                                      onPressed: () {
                                        controller.text = "";
                                        Navigator.of(context).pop(null);
                                      },
                                      child: const Text("取消")),
                                  CupertinoActionSheetAction(
                                      onPressed: () {
                                        String s = controller.text;
                                        controller.text = "";
                                        Navigator.of(context).pop(s);
                                      },
                                      child: const Text("确定")),
                                ],
                              );
                            }));
                        if (result != null) {
                          // ignore: use_build_context_synchronously
                          context
                              .read<CustomNerLabelingController>()
                              .addClassName(result);
                        }
                      },
                      child: Container(
                        decoration: BoxDecoration(
                            color: Colors.grey[200],
                            border: Border.all(color: Colors.grey)),
                        child: const Icon(
                          Icons.plus_one_sharp,
                          color: Colors.red,
                        ),
                      ),
                    )
                  ],
                ),
                const SizedBox(
                  height: 20,
                ),
                Card(
                  elevation: 4,
                  child: Container(
                    padding: const EdgeInsets.all(5),
                    constraints: BoxConstraints(
                        minHeight: 100,
                        minWidth: MediaQuery.of(context).size.width),
                    child: Wrap(
                      children: context
                          .watch<CustomNerLabelingController>()
                          .classNames
                          .map((e) => Container(
                                constraints:
                                    const BoxConstraints(maxWidth: 150),
                                child: DeletableCard(
                                    text: e,
                                    onTap: () {
                                      context
                                          .read<CustomNerLabelingController>()
                                          .removeClassName(e);
                                    }),
                              ))
                          .toList(),
                    ),
                  ),
                ),
                const SizedBox(
                  height: 30,
                ),
                const Text("数据"),
                const SizedBox(
                  height: 30,
                ),
                Card(
                  elevation: 4,
                  child: Container(
                    color: const Color.fromARGB(255, 244, 227, 221),
                    height: 200,
                    width: MediaQuery.of(context).size.width,
                    padding: const EdgeInsets.all(20),
                    child: CustomNerSelectableHighlightText(
                      text: context
                          .watch<CustomNerLabelingController>()
                          .getCurrentRow(),
                    ),
                  ),
                ),
                const SizedBox(
                  height: 20,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    elevatedButtonWrapper(
                        child: const Icon(Icons.first_page),
                        onTap: () {
                          context
                              .read<CustomNerLabelingController>()
                              .firstRow();
                        },
                        toolTip: "第一行数据"),
                    const SizedBox(
                      width: 5,
                    ),
                    elevatedButtonWrapper(
                        child: const Icon(Icons.skip_previous),
                        onTap: () {
                          context
                              .read<CustomNerLabelingController>()
                              .previousRow();
                        },
                        toolTip: "前一行数据"),
                    const SizedBox(
                      width: 5,
                    ),
                    elevatedButtonWrapper(
                        child: const Icon(Icons.skip_next),
                        onTap: () {
                          context.read<CustomNerLabelingController>().nextRow();
                        },
                        toolTip: "后一行数据"),
                    const SizedBox(
                      width: 5,
                    ),
                    elevatedButtonWrapper(
                        child: const Icon(Icons.last_page),
                        onTap: () {
                          context.read<CustomNerLabelingController>().lastRow();
                        },
                        toolTip: "最后一行数据"),
                    const SizedBox(
                      width: 5,
                    ),
                    if (context.watch<CustomNerLabelingController>().isLast)
                      elevatedButtonWrapper(
                          child: const Icon(Icons.file_download),
                          onTap: () async {
                            final data =
                                context.read<CustomNerLabelingController>();
                            if (data.nerFileInfo == null) return;
                            NerSaveModel model = NerSaveModel();
                            model.fileName = data.nerFileInfo!.fileName;
                            model.fileHash = base64Encode(md5
                                .convert(data.nerFileInfo!.fileUint8Data)
                                .bytes);
                            debugPrint(model.fileHash);
                            model.mltoolType = MltoolType.forNlp;
                            List<CustomNerHighlightedOffset> offsets =
                                data.allOffsets;
                            model.annotations = offsets
                                .map((e) => e.toAnnotation(data.classNames))
                                .toList();
                            String annotationFileName = data
                                .nerFileInfo!.fileName
                                .replaceAll(".txt", NerSaveModel.extension);
                            model.labels = data.classNames;
                            await model.toFile(annotationFileName);
                          },
                          toolTip: "保存标注"),
                  ],
                )
              ],
            ),
          ),
        );
      },
    );
  }

  Widget buildTitle(BuildContext ctx) {
    CustomNerLabelingController controller =
        ctx.watch<CustomNerLabelingController>();

    return Text(
        "${controller.nerFileInfo?.fileName ?? ""}   ${controller.currentRowId + 1}/${controller.nerFileInfo?.rowIndexs.length ?? 0 + 1}");
  }

  Widget elevatedButtonWrapper(
      {required String toolTip,
      required Widget child,
      required VoidCallback onTap}) {
    return Tooltip(
      message: toolTip,
      child: ElevatedButton(
        onPressed: onTap,
        child: child,
      ),
    );
  }
}
