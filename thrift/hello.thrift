struct HelloMsg {
    1:optional i32 id;
    2:required string name;
}

service HelleMethod {
    void sayHello(1:HelloMsg helloMsg);
}
