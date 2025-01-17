import 'dart:convert';

import 'package:flutter/material.dart';

import 'enums.dart';
import 'ner_models.dart';
import 'package:mltools_viewer/utils/save_file.dart'
    if (dart.library.html) 'package:mltools_viewer/utils/save_file_on_web.dart';

// ignore: constant_identifier_names
const Labels = NerItems.values;

class NerAnnotation {
  int? start;
  int? end;
  int? labelId;
  String? content;
  int? rowId;

  NerAnnotation({this.start, this.end, this.labelId, this.content, this.rowId});

  NerAnnotation.fromJson(Map<String, dynamic> json) {
    start = json['start'];
    end = json['end'];
    labelId = json['labelId'];
    content = json['content'];
    rowId = json['rowId'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['start'] = start;
    data['end'] = end;
    data['labelId'] = labelId;
    data['content'] = content;
    data['rowId'] = rowId;
    return data;
  }
}

class NerSaveModel {
  static const String extension = ".ml";
  String? fileName;
  String? fileHash;
  String? fileData;
  List<NerAnnotation>? annotations;
  MltoolType? mltoolType;
  List<String> labels = Labels.map((e) => e.toStr()).toList();
  String? nerType;

  NerSaveModel(
      {this.fileHash,
      this.fileName,
      this.annotations,
      this.mltoolType,
      this.nerType = "common",
      required this.fileData});

  NerSaveModel.fromJson(Map<String, dynamic> json) {
    mltoolType =
        json['mltoolType'] == "image" ? MltoolType.forImage : MltoolType.forNlp;
    fileName = json['fileName'];
    fileHash = json['fileHash'];
    if (json['annotations'] != null) {
      // annotations = (json['annotations'] as List).forEach((v) {
      //   annotations!.add(NerAnnotation.fromJson(v));
      // });
      annotations = [];
      for (final i in json['annotations']) {
        annotations!.add(NerAnnotation.fromJson(i));
      }
    }
    fileData = json['fileData'];
    nerType = json['nerType'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data["fileName"] = fileName;
    data["fileHash"] = fileHash;
    data["mltoolType"] = mltoolType == MltoolType.forImage ? "image" : "nlp";
    if (annotations != null) {
      data["annotations"] = annotations!.map((e) => e.toJson()).toList();
    }
    data["labels"] = labels;
    data["nerType"] = nerType;
    data['fileData'] = fileData;
    return data;
  }

  @override
  bool operator ==(Object other) {
    if (other is! NerSaveModel) {
      return false;
    }
    if (fileHash == null || other.fileHash == null) {
      return false;
    }
    return fileHash == other.fileHash;
  }

  @override
  int get hashCode => fileHash.hashCode;
}

extension ToFile on NerSaveModel {
  Future toFile(String filename, BuildContext? context) async {
    await saveFile(
        filename: filename, data: jsonEncode(toJson()), context: context);
  }
}
