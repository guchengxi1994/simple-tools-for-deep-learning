import numpy as np
import skimage.util.noise as snoise
from mltools.src.utils.generate_polygon import generatePolygon, generateRectangle


def rectangleCrop(img: np.ndarray, startPoint: tuple = None, noise=False):
    imgShape = img.shape
    mask = generateRectangle(imgShape, startPoint)
    mask[mask != 255] = 1
    mask[mask == 255] = 0

    if noise:
        noisedMask = np.ones(imgShape) * 255
        noisedMask = snoise.random_noise(noisedMask, "s&p") * 255
        noisedMask = np.array(noisedMask * (1 - mask), dtype=np.uint8)
        return img * mask + noisedMask

    return img * mask


def polygonCrop(
    img: np.ndarray, startPoint: tuple = None, convexHull=False, noise=False
):
    imgShape = img.shape
    mask = generatePolygon(imgShape, startPoint, convexHull)
    mask[mask != 255] = 1
    mask[mask == 255] = 0

    if noise:
        noisedMask = np.ones(imgShape) * 255
        # if len(imgShape) == 3:
        #     mask = cv2.merge([mask, mask, mask])
        noisedMask = snoise.random_noise(noisedMask, "s&p") * 255
        noisedMask = np.array(noisedMask * (1 - mask), dtype=np.uint8)
        return img * mask + noisedMask

    return img * mask


def multiRectanleCrop(img: np.ndarray, number: int = 1, noise=False):
    imgShape = img.shape
    mask = np.zeros(imgShape, dtype=np.uint8)
    for _ in range(number):
        mask += generateRectangle(imgShape)
    mask[mask != 255] = 1
    mask[mask == 255] = 0

    if noise:
        noisedMask = np.ones(imgShape) * 255
        noisedMask = snoise.random_noise(noisedMask, "s&p") * 255
        noisedMask = np.array(noisedMask * (1 - mask), dtype=np.uint8)
        return img * mask + noisedMask

    return img * mask


def multiPolygonCrop(img: np.ndarray, number: int = 1, noise=False, convexHull=False):
    imgShape = img.shape
    mask = np.zeros((imgShape[0], imgShape[1]), dtype=np.uint8)
    for _ in range(number):
        mask += generatePolygon(imgShape, convexHull=convexHull)
    mask[mask != 255] = 1
    mask[mask == 255] = 0

    if noise:
        noisedMask = np.ones(imgShape) * 255
        # if len(imgShape) == 3:
        #     mask = cv2.merge([mask, mask, mask])
        noisedMask = snoise.random_noise(noisedMask, "s&p") * 255
        noisedMask = np.array(noisedMask * (1 - mask), dtype=np.uint8)
        return img * mask + noisedMask

    return img * mask