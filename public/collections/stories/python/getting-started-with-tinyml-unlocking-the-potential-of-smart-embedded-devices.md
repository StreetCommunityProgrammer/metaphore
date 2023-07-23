---
layout: post
title: "Getting Started with TinyML: Unlocking the Potential of Smart Embedded Devices"
author: Sanjay-shankar
created_at: 2023-07-23T15:28:50Z
language: python
---

### The Backstory about your Python Metaphor

This comprehensive guide provides an introduction and step-by-step tutorial on how to start with Tiny Machine Learning (TinyML), a groundbreaking technology that combines machine learning and embedded systems. The guide introduces TinyML and explains its significance and potential, with practical examples like voice assistants. The guide also highlights potential uses of TinyML in different sectors like industrial predictive maintenance, healthcare, and wildlife conservation.



### The Python Story!

In this story, I'll provide detailed instructions to help you start with TinyML. By the time you finish reading, you'll have the knowledge and skills to create a simple project using an embedded ML platform. It's an exciting opportunity to dive into the world of TinyML and witness firsthand the incredible things you can achieve with this cutting-edge technology. So, let's dive right in and unlock the power of TinyML together. Get ready to embark on an adventure that will expand your horizons and open up a world of possibilities in embedded machine learning. Let's get started!

### **What is TinyML?**

Tiny Machine Learning is an exciting convergence of two cutting-edge fields: machine learning and embedded systems. It involves equipping small computing devices with the remarkable capability of machine learning. What sets TinyML apart is its excellent power efficiency, operating at deficient power levels, typically in the range of milliwatts. This efficiency enables always-on machine learning on battery-powered devices, opening up a world of possibilities.

To truly grasp the potential of TinyML, let's explore some familiar examples. Take a moment to think about popular voice assistants like "OK, Google," "Hey, Siri," or "Alexa." These intelligent voice assistants showcase the practical application of TinyML, particularly in keyword spotting and hot word detection. However, it's worth noting that these devices typically rely on a continuous power source or frequent charging. The future of TinyML, on the other hand, is poised to go beyond these limitations by deploying machine learning models directly on small, battery-powered devices. This advancement allows for self-contained and highly efficient computing, revolutionizing our interactions with technology.

### **Where does TinyML is used?**

TinyML shows excellent promise in industrial predictive maintenance, enabling proactive issue prediction and maintenance in machinery. Ping Services has developed an IoT device that autonomously inspects wind turbines, identifying and alerting potential problems in real-time. This approach leads to cost savings, reduced downtime, improved reliability, and better service quality.

Healthcare benefits from TinyML through the Solar Scare Mosquito project. Small IoT robotic platforms disrupt mosquito breeding cycles, combating Malaria, Dengue, and Zika. These solar-powered devices communicate through low-power protocols, providing smart statistics and alerts for widespread mosquito prevention.

TinyML contributes to wildlife conservation by enabling environmental monitoring. Innovative acoustic and thermal sensor systems powered by solar energy prevent collisions between trains and elephants in India. Similar systems prevent whale strikes in busy waterways.

These examples demonstrate the vast potential of TinyML, with current deployments and future opportunities for developers to create their applications.

### **Empowering Edge Devices: Exploring the Potential of TinyML with Edge Impulse**

Tiny Machine learning refers to running machine learning models directly on edge devices, such as microcontrollers and IoT devices, rather than relying on cloud-based processing. This approach brings the power of machine learning algorithms closer to the data source, enabling real-time and low-latency inference on resource-constrained devices. **'Edge Impulse,'** an embedded ML medium, enables the implementation of these strategies.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1687440976960/87e7c2cf-4338-4cd6-a2f0-9dbb1de89dba.png)

To achieve these feats, developers can rely on a unique embedded ML platform called "Edge Impulse." This open-source solution empowers developers by streamlining the collection and processing of sensor data, training machine learning models, and deploying them seamlessly onto microcontrollers. With support for a wide range of sensors and a rich library of pre-built signal processing blocks and machine learning algorithms, Edge Impulse accelerates the prototyping and iteration of models, unlocking new realms of possibilities for developers in the TinyML domain.

### **Embarking on the Edge Impulse studio**

Learning through examples enhances our understanding and simplifies complex concepts. To grasp the fundamentals of EI Studio, let's delve into a real-time project developed using this platform.

We here aim to classify **fire alarm sounds based on their audio characteristics**. This project will serve as our guide to exploring the capabilities of EI Studio.

To kickstart our journey with EI Studio, we require a TinyML-supported device. The studio officially supports a variety of MCUs, ensuring compatibility with popular development boards. However, don't fret if you lack a development board; a mobile phone can suffice for data acquisition and model testing. In the upcoming section, we will delve into the process of data acquisition and impulse design, unraveling the potential of EI Studio.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1687428711826/df888f77-ccb3-4b64-931d-d10142a82ed9.png)

To construct this model, the initial step involves collecting audio data for training the machine learning model. The primary objective is to train the model to distinguish the distinct sound of a Fire Alarm from ambient noise. Alarm and Noise audio samples are gathered in the Data Acquisition tab. The dataset follows a 90:10 ratio, with 90% allocated for training and 10% for testing. Once the setup is completed, we can design the impulse, which will be discussed in detail below.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1687430850982/435c1b65-7da8-42c6-9757-970e899c690d.png)

Once you have prepared the training set, the next step is to create an impulse. An impulse takes the raw data and divides it into smaller windows. In each window, signal processing blocks are applied to extract relevant features. In this case, we can include processing and learning blocks.

For the processing block, we have opted for MFE (Mel-filterbank energy), which is highly effective in extracting spectrograms from audio signals. It utilizes Mel-filterbank energy features, making it particularly useful for non-voice audio. This processing block enables us to capture essential characteristics of the audio data.

On the other hand, for the learning block, we have chosen Classifier. This learning block can learn patterns from the training data and apply this knowledge to recognize audio in new data accurately. It plays a crucial role in the classification process, ensuring that our model can make precise predictions based on the learned patterns.

By combining the MFE processing block and the Classifier learning block, we create a powerful impulse that can effectively process and classify audio data.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1687431017018/fc31f9f2-d4e4-4630-a212-cc7edbc43c57.png)

In this feature, you can configure the MFE (Mel-filterbank energy) block and preview the resulting data transformation. The purpose of the MFE block is to convert a window of audio into a tabular format, where each row corresponds to a different frequency range, and each column represents a specific time interval. Within this table, each cell represents a specific frequency range during a particular period and contains the corresponding amplitude value.

The spectrogram is generated to provide a visual representation of this tabular data. The spectrogram uses colored blocks to represent the amplitude values within the table. The intensity of each colored block corresponds to the amplitude value it represents. By observing the spectrogram, you can gain insights into the frequency distribution and power of the audio signal.

The spectrograms of the alarm and noise samples derived from the MFE feature are shown below for reference and better understanding. These visual representations provide a helpful visual reference to analyze the characteristics of the audio signals and their corresponding amplitude values.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1687431850598/b9a7bf70-5eed-41d4-9228-15e8f0cb5a3e.png)

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1687431860398/26d96ccf-0556-41e7-a740-8f4ed47dccb3.png)

The spectrograms generated by the MFE block play a crucial role in training a robust neural network architecture that excels at recognizing patterns in tabular data. Before preparing the neural network, generating MFE blocks for all the audio windows is essential, which may take some time due to the processing involved.

Neural networks are advanced algorithms inspired by the intricate workings of the human brain. They possess the remarkable ability to learn and identify patterns within their training data. In our case, the specific neural network we are training takes the MFE spectrogram as input and aims to classify it into one of two classes: Noise or Alarm.

As the MFE spectrogram is fed into the neural network, it enters the first layer of neurons. Each neuron in this layer processes and modifies the information based on its internal state. The output from the first layer is then passed to the subsequent layers, where further transformations occur. This sequential process continues until the final layers of the neural network, resulting in a highly refined and distinctive output.

Python is the programming language to develop and customize the NN classifier. Python offers many libraries and tools specifically designed for neural network development, making it a flexible and powerful platform.

```python
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, InputLayer, Dropout, Conv1D, Conv2D, Flatten, Reshape, MaxPooling1D, MaxPooling2D, AveragePooling2D, BatchNormalization, TimeDistributed, Permute, ReLU, Softmax
from tensorflow.keras.optimizers import Adam
EPOCHS = args.epochs or 100
LEARNING_RATE = args.learning_rate or 0.005

# this controls the batch size, or you can manipulate the tf.data.Dataset objects yourself
BATCH_SIZE = 32
train_dataset = train_dataset.batch(BATCH_SIZE, drop_remainder=False)
validation_dataset = validation_dataset.batch(BATCH_SIZE, drop_remainder=False)

# model architecture
model = Sequential()
model.add(Reshape((int(input_length / 40), 40), input_shape=(input_length, )))
model.add(Conv1D(8, kernel_size=3, padding='same', activation='relu'))
model.add(MaxPooling1D(pool_size=2, strides=2, padding='same'))
model.add(Dropout(0.25))
model.add(Conv1D(16, kernel_size=3, padding='same', activation='relu'))
model.add(MaxPooling1D(pool_size=2, strides=2, padding='same'))
model.add(Dropout(0.25))
model.add(Flatten())
model.add(Dense(classes, name='y_pred', activation='softmax'))

# this controls the learning rate
opt = Adam(learning_rate=LEARNING_RATE, beta_1=0.9, beta_2=0.999)
callbacks.append(BatchLoggerCallback(BATCH_SIZE, train_sample_count, epochs=EPOCHS))

# train the neural network
model.compile(loss='categorical_crossentropy', optimizer=opt, metrics=['accuracy'])
model.fit(train_dataset, epochs=EPOCHS, validation_data=validation_dataset, verbose=2, callbacks=callbacks)

# Use this flag to disable per-channel quantization for a model.
# This can reduce RAM usage for convolutional models, but may have
# an impact on accuracy.
disable_per_channel_quantization = False
```

The Confusion matrix provides a comprehensive visual representation of the accuracy and distribution of classified windows. It offers valuable insights into the balance between correctly and incorrectly classified instances. The accompanying screenshot shows that all the alarm and noise audio windows have been accurately classified without misclassifying. This outcome showcases the model's impressive performance and indicates a favorable result.

![Accuracy of the Model](https://cdn.hashnode.com/res/hashnode/image/upload/v1687433717863/49fb3cb1-c416-46a3-9411-74b46afee28f.png)

Edge Impulse provides valuable tools for evaluating and testing our model, ensuring its accuracy and effectiveness. One handy feature is capturing real-time data directly from our device and promptly classifying it. This feature allows us to connect our mobile phones to gather accurate data for testing purposes. This ensures that our model is evaluated with real-world data, enhancing its reliability and performance.

The testing phase results, specifically for the Alarm class, are presented below. These results provide valuable insights into the model's classification performance, highlighting its ability to distinguish and classify instances of the Alarm sound accurately.

We can assess the model's ability to effectively recognize and classify real-time data through the testing process, ensuring its reliability and suitability for practical applications. By leveraging Edge Impulse's robust testing capabilities, we can fine-tune our model and improve its overall performance based on the results.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1687434564158/67c4339f-e31d-421e-9269-ec3b939ee7c3.jpeg)

After designing, training, and validating the impulse, We can deploy the model back to my device. This enables the model to run offline, reducing latency and minimizing power consumption. Edge Impulse provides a convenient solution by packaging the complete impulse, including the MFE algorithm, neural network weights, and classification code, into a single C++ library. We can easily include this library in any embedded software for seamless integration.

Alright!, You now know to acquire data, design Impulse and utilize Edge Impulse to train a neural network model that can recognize a specific sound. The applications for such a model are limitless, ranging from monitoring industrial machinery to identifying voice commands. Once you have completed the model training process, you can seamlessly integrate your Impulse into the firmware of your own embedded device.

### **Conclusion**

To summarize, Tiny Machine Learning (TinyML) represents an exciting intersection of machine learning and embedded systems, enabling small computing devices to possess powerful machine learning capabilities. We also discussed the essential steps in creating a TinyML project using Edge Impulse. From gathering and preparing the training data to designing the impulse and configuring the necessary blocks, we explored the intricacies of the process. The ability to generate spectrograms using the MFE block and train a neural network for accurate audio recognition showcased the power of TinyML in practical applications.

So, why wait? Start exploring the world of TinyML today and witness the transformative impact it can have on smart embedded devices. Let's unlock the potential of this exciting technology and shape the future of intelligence.

### **References**

[TinyML foundation](https://www.tinyml.org/)

[Edge Impulse documentation](https://docs.edgeimpulse.com/docs/)

[Edge Impulse Github](https://github.com/edgeimpulse)

### A Python demo/repos link

_No response_

### PayPal Link for Donation (Python Storyteller)

_No response_
