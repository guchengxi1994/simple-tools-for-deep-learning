import 'package:flutter/material.dart';
import 'package:mltools_viewer/screens/nn_graph/model/nn_nodes/abstract_nn_node.dart';
import 'package:mltools_viewer/screens/nn_graph/model/nn_nodes/nn_enum.dart';
import 'package:tuple/tuple.dart';

class FcActivationDropoutNode extends NNNode {
  FcActivationDropoutNode(
      {super.nodeType = NodeType.fc_activation_dropout,
      required this.name,
      required this.output,
      required this.prevNodeName,
      required this.inputSize,
      this.activationType = 'relu',
      this.rate = 0.5});

  int output;
  String name;
  String prevNodeName;
  Tuple3<int, int, int> inputSize;
  String activationType;
  double rate;

  @override
  Color getColor() {
    return Colors.redAccent;
  }

  @override
  String getName() {
    return name;
  }

  @override
  Tuple3<int, int, int> getOutput() {
    return Tuple3(output, 1, 1);
  }

  @override
  Size getWidgetSize() {
    double widgetHeight =
        outputSize.item1 * 10.0 > 100 ? 100 : outputSize.item1 * 10.0;
    double widgetWidth = outputSize.item2 < 50 ? 50 : outputSize.item2 * 1.0;

    return Size(widgetWidth, widgetHeight);
  }

  @override
  Map<String, dynamic> toJson() {
    return {
      "combination": [
        {
          "fc": {
            "nodeType": NodeType.fc.toStr(),
            "name": name,
            "prevNodeName": prevNodeName,
            "inputSize": inputSize.toList(),
            "outputSize": outputSize.toList(),
            "details": {}
          },
          "activation": {
            "nodeType": NodeType.activation.toStr(),
            "name": name,
            "prevNodeName": prevNodeName,
            "inputSize": inputSize.toList(),
            "outputSize": outputSize.toList(),
            "details": {"activationType": activationType}
          },
          "dropout": {
            "nodeType": NodeType.dropout.toStr(),
            "name": name,
            "prevNodeName": prevNodeName,
            "inputSize": inputSize.toList(),
            "outputSize": outputSize.toList(),
            "details": {"rate": rate}
          }
        }
      ]
    };
  }

  @override
  Tuple3<int, int, int> getInputSize() {
    return inputSize;
  }

  @override
  String getParameter() {
    final result = inputSize.item1 * inputSize.item2 * inputSize.item3 * output;
    return "${inputSize.item1}*${inputSize.item2}*${inputSize.item3}*$output=$result";
  }
}
