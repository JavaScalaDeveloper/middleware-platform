package com.arelore.middleware.platform.server.trace.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/trace")
public class TraceController {

    @GetMapping("/status")
    public Map<String, Object> getStatus() {
        Map<String, Object> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "链路追踪服务运行正常");
        response.put("service", "trace-service");
        return response;
    }

    @GetMapping("/info")
    public Map<String, Object> getInfo() {
        Map<String, Object> response = new HashMap<>();
        response.put("serviceName", "链路追踪服务");
        response.put("version", "1.0.0");
        response.put("description", "分布式系统链路追踪服务");
        return response;
    }
}