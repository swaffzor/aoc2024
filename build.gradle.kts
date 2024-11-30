plugins {
    kotlin("jvm") version "2.0.21"
}

group = "org.example"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    testImplementation(kotlin("test"))
}

tasks.test {
    useJUnitPlatform()
}
kotlin {
    jvmToolchain(22) // Match this to your installed Java version
}

java {
    toolchain {
        languageVersion.set(JavaLanguageVersion.of(22)) // Ensure Java uses the same version
    }
}