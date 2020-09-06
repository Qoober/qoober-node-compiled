#!/bin/sh
if [ -x jre/bin/java ]; then
    JAVA=./jre/bin/java
else
    JAVA=java
fi
echo "QOOBER start running..."
${JAVA} -jar qoober.jar > /dev/null 2>&1 &
echo "QOOBER is running in background"
