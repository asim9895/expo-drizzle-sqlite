import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Task } from "@/db/schema";
import { useSQLiteContext } from "expo-sqlite";
import { drizzle } from "drizzle-orm/expo-sqlite";
import * as schema from "@/db/schema";

const Index = () => {
  const [data, setdata] = useState<Task[]>([]);

  const db = useSQLiteContext();
  const drizzleDb = drizzle(db, { schema: schema });

  useEffect(() => {
    const load = async () => {
      const data = await drizzleDb.query.tasks.findMany();
      setdata(data);
    };

    load();
  }, []);

  return (
    <View>
      <Text>Index</Text>
      {data.map((task) => (
        <Text key={task.id}>{task.title}</Text>
      ))}
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
