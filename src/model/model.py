import numpy as np
from tensorflow.keras import layers, models
from tensorflow.keras.utils import to_categorical
from tensorflow.keras.datasets import mnist
import tensorflowjs as tfjs

(train_data, train_labels), (test_data, test_labels) = mnist.load_data()

x_train = train_data.reshape((60000, 28, 28, 1))
x_train = x_train.astype('float32')/255

x_test = test_data.reshape((10000, 28, 28, 1))
x_test = x_test.astype('float32')/255

y_train = to_categorical(train_labels)
y_test = to_categorical(test_labels)

# Model
model = models.Sequential()
model.add(layers.Conv2D(32, (3,3), input_shape=(28, 28, 1), activation="relu"))
model.add(layers.MaxPooling2D(pool_size=(2, 2)))
model.add(layers.Conv2D(32, (3,3), activation="relu"))
model.add(layers.MaxPooling2D(pool_size=(2,2)))
model.add(layers.Flatten())
model.add(layers.Dense(units=128, activation="relu"))
model.add(layers.Dense(units=10, activation="softmax"))

model.compile(optimizer="adam",
             loss="categorical_crossentropy",
             metrics=["accuracy"]
)

model.summary()
model.fit(x_train, y_train, validation_data=(x_test, y_test), epochs=10, batch_size=200)
model.evaluate(x_test, y_test, verbose=0)

tfjs.converters.save_keras_model(model, "model")